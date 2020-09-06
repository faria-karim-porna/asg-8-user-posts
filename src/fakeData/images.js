let images = [];
let gender = "men";

for (let index = 1; index <= 5; index++) {
    let obj = {"id" : null,"img" : null};
    if( gender == "men")
    {
        gender = "women";
    }
    else
    {
        gender = "men";
    }
    obj["img"] =`https://randomuser.me/api/portraits/med/${gender}/${index}.jpg`;
    obj["id"] = index;
    console.log(obj["id"]);
    images.push(obj);
}
export default images ;

