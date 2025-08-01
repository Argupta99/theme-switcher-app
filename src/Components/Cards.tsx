type CardProps = {title: string, description: string, image: string; 
};


function card ({title, description}: CardProps) {

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );

}

export default card;


