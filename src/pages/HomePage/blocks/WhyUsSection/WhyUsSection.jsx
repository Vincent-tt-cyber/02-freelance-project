import React from "react";
import styles from "./WhyUsSection.module.scss";
import { Link } from "react-router-dom";

const WhyUsSection = () => {
  const [benefits, setBemefits] = React.useState([
    {
      id: 1,
      title: "Luxury facilities",
      description:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    },
    {
      id: 2,
      title: "Affordable Price",
      description:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
      id: 3,
      title: "Many Choices",
      description:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  ]);

  return (
    <>
      <section className={styles["benefits"]}>
        <div className="container">
          <div className={styles["benefits__grid"]}>
            <h1 className={styles["benefits__title"]}>Why Choosing Us</h1>
            {benefits.map((item) => (
              <div key={item.id} className={styles["benefits__card"]}>
                <h3 className={styles["benefits__card-title"]}>{item.title}</h3>
                <p className={styles["benefits__card-text"]}>
                  {item.description}
                </p>
                <Link to="#" className={styles["benefits__card-link"]}>
                  More Info
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsSection;
