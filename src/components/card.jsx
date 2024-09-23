function Card({getData,v}){
console.log(v);
return (
    <div className="cardiac">
<h1>Card</h1>
<h2>{v}</h2>
<button className="buts" onClick={() => getData("GULZAR")}>send data</button>
    </div>
)
}
export default Card;
