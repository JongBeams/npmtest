const person = {
    name: '장종범',
    address : {
        line1 : '광진구 광나루로',
        city : '서울',
        country : "대한민국",
    },
    profiles : ['twitter','linkedin','instagram'],
    /* 함수형 호출 가능 */
    printProfile: ()=>{
        /**반복문 */
        person.profiles.map(
            // (profile)=>{
            //     console.log(profile)
            // }
            //축약 가능
            profile => console.log(profile)
        )
    },
    //매게변수 넣기
    selectProfile: (i)=>{
        console.log(person.profiles[i])
    }

}


export default function LearingJavaScript(){
    return(
        <div>
        <div>이름 : {person.name}</div>
        <div>주소 : {person.address.line1}</div>
        <div>도시 : {person.address.city}</div>
        <div>국가 : {person.address.country}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        <div>{person.profiles[2]}</div>
        <div>{person.selectProfile(1)}</div>
        </div>
    );

}