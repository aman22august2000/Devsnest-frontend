import Card from "./components/Card";

function app() {
    var arr= [1,2,3,4,5];

    return (
        <div className="App">
            {<Card title="Title 1"/>
            <Card title="Title 2"/>
            <Card title="Title 3"/>
            <Card title="Title 4"/>
            <Card title="Title 5"/>}
            
            {/* <ul>
            {
                arr.map

            }

            </ul>}

            {
                arr.length > 6 ?
                arr.map(item,index) =>
                <Card)
            }
        </div>
    )
}