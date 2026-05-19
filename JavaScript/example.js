function find_largest_number(arr) {
    if (arr.length === 0) {
        console.log("المصفوفة فارغة");
        return null;
    }
    
    let max_num = arr[0]; // افتراض أن أول عنصر هو الأكبر
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_num) {
            max_num = arr[i]; // المرور على باقي العناصر للمقارنة
        }
    }
    
    console.log(`أكبر قيمة عددية في المصفوفة هي: ${max_num}`);
    return max_num;
}

// مصفوفة تجريبية لاختبار الدالة
let numbers = [5, 12, 8, 44, 21, 3];
find_largest_number(numbers);
