import { ref } from 'vue'
import { defineStore } from 'pinia'

// API
import { homeGetBannerAPI } from '@/api/home'
import { categoryGetFilterAPI, categoryGetListAPI } from '@/api/category'

export const useCategoryStore = defineStore('categoryStore', () => {
  // =============================
  // 轮播图数据
  // =============================

  const categoryBannerList = ref([])
  const getCategoryBannerList = async () => {
    const {
      data: { result }
    } = await homeGetBannerAPI({
      distributionSite: 2
    })
    categoryBannerList.value = result
  }

  // =============================
  // 二级分类数据
  // =============================

  const categoryList = ref({})
  const getCategoryList = async (id) => {
    const {
      data: { result }
    } = await categoryGetListAPI(id)
    categoryList.value = result
  }

  // =============================
  // 二级分类地址
  // =============================

  const subCategoryList = ref({})
  const getSubCategoryList = async (id) => {
    const {
      data: { result }
    } = await categoryGetFilterAPI(id)
    subCategoryList.value = result
  }

  // =============================

  return {
    // 轮播图数据
    categoryBannerList,
    getCategoryBannerList,
    // 二级分类数据
    categoryList,
    getCategoryList,
    // 二级分类地址
    subCategoryList,
    getSubCategoryList
  }
})
