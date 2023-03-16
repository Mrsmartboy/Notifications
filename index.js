const Notification = (props) => {
  const { imageUrl, content, classNames } = props;
  return (
    <div className={`box ${classNames}`}>
      <img src={imageUrl} className="image" alt={content} />
      <p className="content">{content}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="heading">Notifications</h1>
    <div className="message-container">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
        classNames="primary-message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
        classNames="success-message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
        classNames="warning-message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Error Message"
        classNames="danger-message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
