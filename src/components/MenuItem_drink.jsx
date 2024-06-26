import './MenuItem.css';

export const MenuItem_drink = ({ drink }) => {
    return (
        <div className="MenuItem">
            <img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
            <p>{drink.name}</p>
        </div>
    );
}