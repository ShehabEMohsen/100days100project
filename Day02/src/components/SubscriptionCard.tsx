import "./SubscriptionCard.css";

export default function SubscriptionCard(props: any) {
  console.log(props.type);
  console.log(props.animation);
  return (
    <div className="subscription-card">
      <div
        className={`${
          props.animation === "month" ? "animation" : "animation2"
        } subscription-title`}
      >
        {props.name}
      </div>
      <div
        className={`${
          props.animation === "month" ? "animation" : "animation2"
        } subscription-price`}
      >
        ${props.price}/{props.type}
      </div>
      <div
        className={`${
          props.animation === "month" ? "animation" : "animation2"
        } subscription-desc`}
      >
        {props.desc}
      </div>
      <a href="#">
        <div
          className={`${
            props.animation === "month" ? "animation" : "animation2"
          } subscription-button`}
        >
          Get Started Now
        </div>
      </a>
    </div>
  );
}
