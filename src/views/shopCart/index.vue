<template>
  <sticky ref="stickyRef"></sticky>
  <div class="container">
    <van-checkbox-group
      v-model="checked"
      ref="checkboxGroup"
      @change="handleShopCheck"
    >
      <div style="padding-top: 12px">
        <div
          class="card"
          :key="index"
          v-for="(shopItem, index) in shopList"
          ref="cardRef"
        >
          <van-sticky :offset-top="offsetTop" :container="cardRefContainer">
            <div class="card-header">
              <div class="card-header-content">
                <van-checkbox
                  :name="shopItem.popInfo.vid"
                  icon-size="18px"
                  @click="(e) => onClickShop(e, shopItem.popInfo.vid)"
                />
                <div class="shop-name">{{ shopItem.popInfo.vname }}</div>
              </div>
              <van-tag
                v-if="shopItem.hasCoupon === '1'"
                round
                color="#ffe1e1"
                text-color="#ad0000"
                >优惠券</van-tag
              >
              <div v-else />
            </div>
          </van-sticky>

          <div v-for="(content, index1) in shopItem.sortedItems" :key="index1">
            <div class="sub-header">
              <div class="sub-header-left">
                <div>{{ content.polyItem.promoteFlag }}</div>
                <div>{{ content.polyItem.promoteTitle }}</div>
              </div>
              <div class="sub-header-right">
                {{ content.polyItem.actLineTitle }}>
              </div>
            </div>
            <div class="card-container">
              <div class="card-container-left">
                <van-checkbox
                  :name="content.itemId"
                  icon-size="18px"
                  @click="(e) => onClickItem(e, content.itemId)"
                />
              </div>
              <van-card
                num="2"
                :price="content.polyItem.products[0].jdPrice"
                :title="content.polyItem.products[0].mainSku.name"
                :thumb="content.polyItem.products[0].mainSku.image"
                :origin-price="content.polyItem.products[0].price"
              >
                <template #tags>
                  <van-tag class="tag-content" plain type="danger"
                    >{{ content.polyItem.products[0].mainSku.colorSizeDesc
                    }}<van-icon name="arrow-down"
                  /></van-tag>
                  <br />
                  <van-tag
                    v-for="(tag, index2) in content.polyItem.products[0]
                      .selectPromotion"
                    :key="index2"
                    class="tag-content"
                    plain
                    type="danger"
                    >{{ tag.reducePromoteDesc }}</van-tag
                  >
                </template>
                <template #num>
                  <div class="num-content">
                    <div @click="handleGoodsNum(content, 'sub')">-</div>
                    <div class="van-num">
                      {{ content.polyItem.products[0].num }}
                    </div>
                    <div @click="handleGoodsNum(content, 'add')">+</div>
                  </div>
                </template>
                <template #footer>
                  <div class="footer-content" @click="handleDel(content)">
                    <div>移入关注</div>
                    <div>｜</div>
                    <div>删除</div>
                  </div>
                </template>
              </van-card>
            </div>
          </div>
        </div>
      </div>
    </van-checkbox-group>
    <div v-if="itemsLen" class="bottom-legned">
      <van-checkbox @change="checkAll" icon-size="18px" v-model="checkedAll"
        >全选</van-checkbox
      >
      <div class="bl-middle">
        <div>合计：￥{{ parseFloat(shopPriceTotal).toFixed(2) }}</div>
        <div>
          优惠减：￥{{ parseFloat(couponTotal).toFixed(2) }}
          <van-tag round color="#ffe1e1" text-color="#ad0000">优惠明细</van-tag>
        </div>
      </div>
      <van-button round type="danger" v-if="selectedLen" size="small"
        >领券结算({{ selectedLen }})</van-button
      >
      <van-button round type="danger" v-if="!selectedLen" size="small"
        >去结算({{ selectedLen }})</van-button
      >
    </div>
    <!-- <van-image width="100" height="100" :src="'/emptyCart.png'" /> -->
    <div v-if="!itemsLen" class="empty-content">
      <van-icon name="cart-o" size="120" color="rgba(143, 148, 152, 0.5)" />
      <div class="empty-description">
        <div>购物车竟然是空的</div>
        <div>再忙，也要记得买点什么犒劳自己~</div>
      </div>
    </div>
  </div>
  <tabbar ref="tabbarRef"></tabbar>
</template>

<script setup name="ShopCart">
import { Dialog, Notify } from "vant";

import { getShopCartList } from "@/api/shopCart";

const { proxy } = getCurrentInstance();
const shopList = ref([]); // 商铺及商品列表
const itemsLen = ref(0); // 商铺及商品总数
const selectedLen = ref(0); // 选中商品总数
const couponTotal = ref(0); // 优惠总金额
const shopPriceTotal = ref(0); // 商品优惠后总金额

const checked = ref([]); // 商铺及商品选中后存放
const checkedAll = ref(false); // 全选状态

const checkboxGroup = ref(null);
const cardRefContainer = proxy.$refs.cardRef; // 通过 container 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。
const offsetTop = ref(50);

const stickyRef = ref();
const tabbarRef = ref();
const containerHeight = ref("");
const tabbarHeight = ref("");

nextTick(() => {
  containerHeight.value =
    stickyRef.value?.$el?.offsetHeight +
    tabbarRef.value?.$el.offsetHeight +
    "px";

  tabbarHeight.value = tabbarRef.value?.$el.offsetHeight + "px";
  console.log(
    "sticky,tabbar 高度：",
    stickyRef.value?.$el?.offsetHeight,
    tabbarRef.value?.$el.offsetHeight
  );
});

getShopCartList().then((res) => {
  shopList.value = res.data;
  itemsLen.value = res.data.length;

  res.data.forEach((shopItem) => {
    itemsLen.value = itemsLen.value + shopItem.sortedItems.length;
  });
});

const checkAll = (value) => {
  if (value) {
    checkboxGroup.value.toggleAll(true);
    // 全选商品后，最后再计算商品价格和优惠数额
    calPriceDiscount();
  } else {
    checkboxGroup.value.toggleAll(false);
    // 商品价格和优惠清零
    couponTotal.value = 0;
    shopPriceTotal.value = 0;
    selectedLen.value = 0;
  }
};

const handleShopCheck = (value) => {
  console.log("handleShopCheck", value);
};

const onClickShop = (e, id) => {
  if (checked.value.includes(id)) {
    // 如果shop店铺在数组中，则将店铺下的所有商品放入数组中，且已经存在的不用管
    shopList.value.forEach((shopItem) => {
      if (shopItem.popInfo.vid === id) {
        shopItem.sortedItems.forEach((content) => {
          if (!checked.value.includes(content.itemId)) {
            checked.value.push(content.itemId);
          }
        });
      }
    });
  } else {
    // 如果shop店铺不在数组中， 则移除店铺下的所有商品
    shopList.value.forEach((shopItem) => {
      if (shopItem.popInfo.vid === id) {
        shopItem.sortedItems.forEach((content) => {
          if (checked.value.includes(content.itemId)) {
            checked.value.splice(
              checked.value.findIndex((item) => item === content.itemId),
              1
            );
          }
        });
      }
    });
  }

  // 如果选中的商品及商铺长度等于总长度itemsLen
  if (checked.value.length === itemsLen.value) {
    checkedAll.value = true;
  }

  if (checked.value.length === 0) {
    checkedAll.value = false;
  }
  // 点击商铺后，最后再计算商品价格和优惠数额
  calPriceDiscount();
};

const onClickItem = (e, itemId) => {
  shopList.value.forEach((shopItem) => {
    let len = 0;
    shopItem.sortedItems.forEach(async (content) => {
      if (checked.value.includes(itemId) && content.itemId === itemId) {
        // 如果商品id在数组中 ，则判断商铺id是否在数组中，如果不在，则加入
        if (!checked.value.includes(shopItem.popInfo.vid)) {
          await checked.value.push(shopItem.popInfo.vid);
        }
      }

      if (!checked.value.includes(content.itemId)) {
        len = len + 1;
      }
    });

    if (
      len === shopItem.sortedItems.length &&
      checked.value.includes(shopItem.popInfo.vid)
    ) {
      // 判断是否商铺下没有商品，如果没有商品，则判断商铺id在不在数组中，如果在，则删除商铺id
      checked.value.splice(
        checked.value.findIndex((item) => item === shopItem.popInfo.vid),
        1
      );
    }
  });

  // 如果选中的商品及商铺长度等于总长度itemsLen
  if (checked.value.length === itemsLen.value) {
    checkedAll.value = true;
  }

  if (checked.value.length === 0) {
    checkedAll.value = false;
  }

  // 点击商品后，最后再计算商品价格和优惠数额
  calPriceDiscount();
};

const calPriceDiscount = () => {
  shopPriceTotal.value = 0;
  couponTotal.value = 0;
  selectedLen.value = 0;

  shopList.value.forEach((shopItem) => {
    shopItem.sortedItems.forEach((content) => {
      if (checked.value.includes(content.itemId)) {
        shopPriceTotal.value =
          shopPriceTotal.value +
          parseFloat(
            parseFloat(content.polyItem.products[0].jdPrice).toFixed(2)
          );

        couponTotal.value =
          couponTotal.value +
          parseFloat(
            (parseFloat(content.polyItem.products[0].price) * 0.99).toFixed(2)
          );

        selectedLen.value = selectedLen.value + 1;
      }
    });
  });
};

const handleDel = () => {
  Dialog.confirm({
    title: "删除警告",
    message: `你确定要删除商品吗？点击确定，删除商品，点击取消返回列表。`,
  })
    .then(() => {
      // on confirm
      Notify({ type: "success", message: "删除成功！" });
    })
    .catch(() => {
      // on cancel
    });
};

const handleGoodsNum = (item, type) => {
  const data = shopList.value.map((shopItem) => {
    return {
      ...shopItem,
      sortedItems: shopItem.sortedItems.map((content) => {
        if (content.itemId === item.itemId) {
          // content.polyItem.products[0].num
          let total = parseInt(content.polyItem.products[0].num);
          if (type === "add") {
            total = total + 1;
          } else {
            if (total === 0 || total === 1) {
              total = 1;
              Notify({ type: "danger", message: "这里为了省事，最少为 1 ." });
            } else {
              total = total - 1;
            }
          }
          return {
            ...content,
            polyItem: {
              ...content.polyItem,
              products: [
                {
                  ...content.polyItem.products[0],
                  num: total,
                },
              ],
            },
          };
        } else {
          return content;
        }
      }),
    };
  });

  shopList.value = data;
};

onMounted(() => {
  offsetTop.value =
    parseInt(document.getElementById("vanStickyId").offsetHeight) - 1;
});
</script>
<style scoped>
.container {
  --height: v-bind("containerHeight");
  --container-height: calc(100vh - var(--height));
  --tabbarHeight: v-bind("tabbarHeight");

  height: calc(100vh - var(--height));
  overflow: auto;
}
</style>
<style scoped lang="scss" src="./index.scss"></style>
