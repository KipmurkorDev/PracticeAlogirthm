var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let starts = 0, ends = m;

    while(starts <= ends) {
        const partitionX = (starts + ends) >> 1;
        const partitionY = ((m + n + 1) >> 1) - partitionX;

        const maxLeftX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxLeftY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

        const minRightX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minRightY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]

        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            const lowMax = Math.max(maxLeftX, maxLeftY);
            if(( m + n ) % 2 == 1)
            return lowMax;
            return (lowMax + Math.min(minRightX, minRightY)) / 2;
        } else if(maxLeftX < minRightY) {
            starts = partitionX + 1;
        } else
            ends = partitionX - 1;
    }
};