const categories = require('./categories')

/**
 * @typedef Category
 * @property { String } id - Category ID
 * @property { String | null } parent - The parent of category
 */

/**
 * @typedef CategoryTree
 * @property { CategoryTree }
 */

/**
 * Build a tree of category based on array of categories
 * @param { Array <Category> } values - The array of categories
 * @return { Object } - The tree of categories
 */
function buildCategoriesTree (values) {
  /**
   * Buld a tree of category
   * @param { Array <Category> } categories - The array of categories
   * @param { String | null } currentCategoryId - The parent of category
   * @return { CategoryTree }
   */
  function buildTree (categories, currentCategoryId = null) {
    const tree = {}

    for (let category of categories) {
      if (category.parent === currentCategoryId) {
        const children = buildTree(categories, category.id)
        tree[category.id] = children || {}
      }
    }

    return tree
  }

  return buildTree(Array.isArray(values) ? values : [])
}

console.log(JSON.stringify(buildCategoriesTree(categories), null, 2))
