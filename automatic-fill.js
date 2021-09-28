function val_change(){
    let person_num = 30; //填写班级人数，默认30
    let min_cou = 94; //你需要的最低分数，默认94
    let max_cou = 100; //你需要的最高分数，默认100
    let block = (person_num-1) * 6;
    for(i = 0;i < block;i++){
        min = Math.ceil(min_cou);
        max = Math.floor(max_cou);
        document.querySelector(".xshp-input").value = Math.floor(Math.random() * (max - min + 1)) + min;
        document.querySelector(".xshp-input").className = "xshp-change";
    }
}
val_change();