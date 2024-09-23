function Parent (){

    return <Child name="mayuri" />
}

function Child(props){
    return <div>{props.name}</div>
}