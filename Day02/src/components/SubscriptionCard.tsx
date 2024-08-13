import "./SubscriptionCard.css";

export default function SubscriptionCard(props: any) {
  return (
    <div className="subscription-card">
      <div className="subscription-title">{props.name}</div>
      <div className="subscription-price">
        ${props.price}/{props.type}
      </div>
      <div className="subscription-desc">{props.desc}</div>
      <a href="#">
        <div className="subscription-button">Get Started Now</div>
      </a>
    </div>
  );
}
