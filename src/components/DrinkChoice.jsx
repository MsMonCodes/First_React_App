export const DrinkChoice = ({ drink }) => {
    return (
        <>
            <h3>Your choice: {drink.name}</h3>
            <img src={drink.imgUrl} alt={drink.alt} width='100px' height='100pxh' />
            <p>Your drink wil be ready in a few minutes</p>
        </>
    );
};