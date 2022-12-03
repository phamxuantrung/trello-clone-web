const sort = {
    order: function(arr, arrOrder, attr){
        return arr.sort(function(a, b){
            return arrOrder.indexOf(a[attr]) - arrOrder.indexOf(b[attr]) 
        })
    }
}

export default sort;