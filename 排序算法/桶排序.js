/**
 * 排序思想：核心思想是将要排序的数据分到几个有序的桶里，每个桶里的数据再单独进行排序。
 * 桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。
 * 桶排序对要排序数据的要求是非常苛刻的。
 * 首先，要排序的数据需要很容易就能划分成 m 个桶，并且，桶与桶之间有着天然的大小顺序。
 * 这样每个桶内的数据都排序完之后，桶与桶之间的数据不需要再进行排序。
 * 其次，数据在各个桶之间的分布是比较均匀的。如果数据经过桶的划分之后，有些桶里的数据非常多，
 * 有些非常少，很不平均，那桶内数据排序的时间复杂度就不是常量级了。在极端情况下，如果数据都被划分到一个桶里，那就退化为 O(nlogn) 的排序算法了
 **/