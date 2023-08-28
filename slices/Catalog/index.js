import React, { Fragment, useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import VisibilitySensor from "react-visibility-sensor";

const Catalog = ({ slice }) => {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://valet-backend-prod.accelretail.io/website/b905dc1d-b5fd-43c1-a2a5-dd9606d5dd58/sections/`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-api-key": "6c398990-235b-4efa-b364-bd2595354306",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        setAppState({ loading: false, res: res });
        if (res?.statusCode && res?.statusCode !== 200) {
          throw res;
        }
        return res;
      });
  }, [setAppState]);

  return (
    <section className={`catalog-section ` + slice.primary.class}>
      <div className="container">
        {appState.loading
          ? "Not loading!"
          : appState.res?.map((section, index) => (
              <ProductItems
                props={section}
                className={slice.primary.class}
                key={index}
              />
            ))}
      </div>
    </section>
  );
};

const ProductItems = ({ props, className }) => {
  const { products } = props;
  const collapsed = className === "catalog-only" ? true : false;

  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  // id is for vantage and not wb
  // wb id =
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl =
      `https://valet-backend-prod.accelretail.io/website/35f2c697-e48f-4af3-81f1-a628e7bf6fdc/section/` +
      props.id;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth-api-key": "6c398990-235b-4efa-b364-bd2595354306",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        setAppState({ loading: false, res: res });
        if (res?.statusCode && res?.statusCode !== 200) {
          throw res;
        }
        console.log(res);
        return res;
      });
  }, [setAppState]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setHasAnimated(true);
    }
  };

  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <Fragment>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        {({ isVisible }) => {
          const isInView = isVisible || hasAnimated;
          return (
            <div
              className={isInView ? "category-title enter " : "category-title"}
            >
              <div className="container">
                <h3 onClick={() => setIsCollapsed(!isCollapsed)}>
                  {props.name}
                </h3>
              </div>
              <div className={`category-outer ${isCollapsed ? "hidden" : ""}`}>
                <div className="category-inner">
                  {appState.loading
                    ? "Loading..."
                    : appState.res?.map((product, index) => (
                        <div className="product-item">
                          <div className="product-image">
                            <img
                              className="image"
                              key={product.itemId}
                              src={
                                `https://valet-images.s3-accelerate.amazonaws.com/products/` +
                                product.sku +
                                `-1.jpg`
                              }
                              alt={product.name}
                            />
                          </div>
                          <div className="product-text">
                            <p className="name">
                              <span className="sku">{product.sku}</span>
                              {product.name}
                            </p>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          );
        }}
      </VisibilitySensor>
    </Fragment>
  );
};

export default Catalog;
