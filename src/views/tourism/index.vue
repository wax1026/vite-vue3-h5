<template>
  <van-sticky>
    <van-nav-bar
      :title="$route.meta?.title"
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
  </van-sticky>
  <van-search
    v-model="queryParams.scenicName"
    show-action
    placeholder="请输入景区名称"
    @update:model-value="handleQuery"
    @cancel="handleReset"
  >
    <template #action>
      <div
        class="action-content"
        v-if="!queryParams.scenicName"
        @click="onClickFilter"
      >
        筛选
      </div>
      <div class="action-content" v-else @click="onClickCancel">取消</div>
    </template>
  </van-search>

  <div
    class="comfort-container"
    v-if="filterData.comfortLevelData.content.length"
  >
    <div style="margin-left: 14px" class="comfort-item">舒适度：</div>
    <div
      :class="{
        'comfort-item': true,
        color5: item.id === '5',
        color4: item.id === '4',
        color3: item.id === '3',
        color2: item.id === '2',
        color1: item.id === '1'
      }"
      v-for="item in filterData.comfortLevelData.content"
      :key="item.id"
    >
      <div>
        {{ item.name }}
      </div>
    </div>
  </div>

  <!-- //card -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    :immediate-check="false"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="card" :key="current" v-for="current in listInfo">
      <div class="card-header">
        <div class="name">{{ current.scenicName }}</div>
        <div
          @click="jumpToDetail(current.scenicScopeList[0])"
          v-if="current.scenicScopeList.length === 1"
          class="detail"
        >
          详情 >
        </div>
      </div>
      <div class="card-sub-info">
        <div class="city">
          <img src="../../assets/icon-city.png" />
          <span>{{ current.city }}</span>
        </div>
        <div class="level">
          <img src="../../assets/icon-level.png" />
          <span>{{ current.grade }}</span>
        </div>
      </div>
      <div
        v-for="scenicScope in current.scenicScopeList"
        :key="scenicScope.scenicId"
        :class="{
          'card-content': current.scenicScopeList.length > 1
        }"
      >
        <div class="card-content-box">
          <div
            class="card-content-name"
            v-if="current.scenicScopeList.length > 1"
          >
            • {{ scenicScope.list[0].statisticsName }}
          </div>
          <div
            @click="jumpToDetail(scenicScope)"
            v-if="current.scenicScopeList.length > 1"
            class="detail"
          >
            详情 >
          </div>
        </div>

        <div class="card-progress">
          <div class="card-progress-inner">
            <div
              :style="{
                width: `${(
                  (100 * scenicScope.list[0].count) /
                  scenicScope.list[0].headCount
                ).toFixed(2)}%`,
                'background-color': scenicScope.list[0].color
              }"
              :class="{
                'card-progress-bg': true,
                'card-progress-bg-1':
                  scenicScope.list[0].count === scenicScope.list[0].headCount,
                'card-progress-bg-2':
                  scenicScope.list[0].count !== scenicScope.list[0].headCount
              }"
            ></div>
            <div
              class="card-progress-text"
              v-if="scenicScope.list[0].closeStatus === '0'"
            >
              {{ scenicScope.list[0].count }}人/{{
                scenicScope.list[0].headCount
              }}人
            </div>
            <div v-else class="card-progress-close">已闭园</div>
          </div>
        </div>
        <div class="card-footer">
          <div>更新时间：{{ scenicScope.list[0].updata }}</div>
          <div
            :class="{
              unVisiblity: scenicScope.list[0].closeStatus === '1'
            }"
          >
            |
          </div>
          <div
            :class="{
              unVisiblity: scenicScope.list[0].closeStatus === '1'
            }"
          >
            当前客流/瞬时承载量
          </div>
        </div>
      </div>
    </div>

    <div v-if="!listInfo.length && !loading" class="empty-content">
      <img src="../../assets/风景.png" />
      <div class="empty-description">
        <div>抱歉，未搜索到相关景区</div>
        <div>您可以试试其他搜索条件~</div>
      </div>
    </div>
  </van-list>

  <van-popup
    v-model:show="actionShow"
    round
    position="bottom"
    :style="{ height: 'auto' }"
  >
    <div class="popup-title">
      <div @click="handleReset">重置</div>
      <div @click="handleQuery">完成</div>
    </div>

    <div class="scenic-level">
      <div class="data-title">景区等级</div>
      <div
        class="data-container"
        v-if="filterData.scenicLevelData.content.length"
      >
        <div
          class="data-content"
          v-for="item in filterData.scenicLevelData.content"
          :key="item.id"
        >
          <van-button
            @click="handleParam(item.id, 'scenicLevel')"
            plain
            size="small"
            hairline
            :class="{
              activeBt: queryParams.scenicLevel.indexOf(item.id) !== -1
            }"
            round
            >{{ item.name }}</van-button
          >
        </div>
      </div>
    </div>

    <div class="comfort-level">
      <div class="data-title">舒适度</div>
      <div
        class="data-container"
        v-if="filterData.comfortLevelData.content.length"
      >
        <div
          class="data-content"
          v-for="item in filterData.comfortLevelData.content"
          :key="item.id"
        >
          <van-button
            @click="handleParam(item.id, 'comfortLevel')"
            plain
            size="small"
            :class="{
              activeBt: queryParams.comfortLevel.indexOf(item.id) !== -1
            }"
            hairline
            round
            >{{ item.name }}</van-button
          >
        </div>
      </div>
    </div>

    <div class="city-data">
      <div class="data-title">城市</div>
      <div class="data-container" v-if="filterData.cityData.content.length">
        <div
          class="data-content"
          v-for="item in filterData.cityData.content"
          :key="item.id"
        >
          <van-button
            @click="handleParam(item.id, 'cityId')"
            plain
            :class="{
              activeBt: queryParams.cityId.indexOf(item.id) !== -1
            }"
            size="small"
            hairline
            round
            >{{ item.name }}</van-button
          >
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup name="Tourism">
import { selectCommonDic, queryPCPassFlow } from "@/api/tourism";

const filterData = ref({
  scenicLevelData: { content: [] },
  comfortLevelData: { content: [] },
  cityData: { content: [] }
}); // 搜索条件数据

const configData = ref([
  {
    tableName: "tb_dic_scenic_level_three",
    objName: "scenicLevelData"
  },
  {
    tableName: "tb_dic_comfort_level",
    objName: "comfortLevelData"
  },
  {
    tableName: "v_city",
    objName: "cityData"
  }
]);

console.log("configData,", configData);

// const listInfo = ref([]); // 景区列表数据
const loading = ref(false);
const finished = ref(false);

const data = reactive({
  listInfo: [], // 景区列表数据
  actionShow: false,
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    scenicName: "",
    scenicLevel: "",
    comfortLevel: "",
    cityId: ""
  }
});

const { queryParams, actionShow, listInfo } = toRefs(data);

const router = useRouter();

const onClickLeft = () => {
  router.push({ path: "/mine/index" }); //跳转 到我的主页
};

const onClickFilter = () => {
  // todo 打开搜索选项弹框
  actionShow.value = true;
};
const onClickCancel = () => {
  // todo 取消搜索，可重新输入要搜索参数
  handleReset();
};

const handleQuery = () => {
  // todo 获取参数，查询结果
  actionShow.value = false;

  queryPCPassFlow(queryParams.value).then((res) => {
    console.log("ceshidata", res);
    listInfo.value = res.data;
    loading.value = false;
  });
};

const handleReset = () => {
  // todo 重置搜索参数
  queryParams.value = {
    pageNum: 1,
    pageSize: 10,
    scenicName: "",
    scenicLevel: "",
    comfortLevel: "",
    cityId: ""
  };

  queryPCPassFlow(queryParams.value).then((res) => {
    listInfo.value = res.data;
    loading.value = false;
  });
};

const handleParam = (id, key) => {
  let content = queryParams.value[key];
  if (content.indexOf(id) !== -1) {
    // 如果字符串存在
    content = content.replace(id, ""); // 原字符串不变
    if (content.indexOf(",") === 0) {
      content = content.slice(1); // 原字符串不变
    }

    if (content.indexOf(",,") !== -1) {
      content = content.replace(",,", ",");
    }
  } else {
    // 如果字符串不存在
    if (content === "") {
      content = `${id}`;
    } else {
      content = content + "," + id;
    }
  }

  queryParams.value[key] = content;
};

const jumpToDetail = (current) => {
  router.push({
    path: "/tourism/detail",
    query: {
      ...current,
      scenicScopeId: current.scenicScopeId,
      scenicScopeName: current.scenicScopeName
    }
  }); //跳转到江苏旅游
};

const onLoad = () => {
  queryParams.value.pageNum++;
  // todo 获取参数，查询结果
  console.log("wo shi debounce");

  queryPCPassFlow(queryParams.value)
    .then((res) => {
      data.listInfo.push(...res.data);

      console.log("list", listInfo.value);
      actionShow.value = false;
      loading.value = false;

      // 数据全部加载完成
      if (data.listInfo.length >= res.recordsTotal) {
        finished.value = true;
      }
    })
    .catch((error) => {
      loading.value = false;
    });
};

const handleStop = (event) => {
  event.stopPropagation();
};

onMounted(() => {
  // 获取搜索条件的配置项
  selectCommonDic(undefined, configData.value).then((res) => {
    filterData.value = {
      ...res.data,
      comfortLevelData: {
        content: res.data.comfortLevelData.content.reverse()
      }
    };
  });

  // 搜索列表数据
  loading.value = true;
  queryPCPassFlow(queryParams.value)
    .then((res) => {
      listInfo.value = res.data;
      loading.value = false;
      console.log("ceshidata", listInfo.value);
    })
    .catch((error) => {
      loading.value = false;
    });
});
</script>
<style scoped lang="scss" src="./index.scss"></style>
