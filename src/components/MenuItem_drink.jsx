import './MenuItem.css';

export const MenuItem_drink = ({ drink, clickFn }) => {
    return (
        <button className="MenuItem" onClick={() => clickFn(drink)}>
            <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
            <p>{drink.name}</p>
        </button>
    );
}