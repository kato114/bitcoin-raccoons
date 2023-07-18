const Button = (props) => {
    return (
      <button
        className="text-[15px] sm:text-[20px] w-[300px] lg:w-[350px]"
        onClick={props.clickEvent}
      >
        {props.text}
      </button>
    );
}

export default Button