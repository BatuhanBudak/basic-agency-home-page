import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Clients() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressBarWidth = 400;
  let x = useMotionValue(0);
  let progressBarX = useTransform(x, (latest) => {
    let max = carouselWidth - progressBarWidth;
    return clamp(-latest - 175, 0, max);
  });

  function clamp(number: number, min: number, max: number) {
    return Math.max(min, Math.min(number, max));
  }

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      setCarouselWidth(carousel.scrollWidth - carousel.offsetWidth);
    }
  }, []);

  return (
    <section className="clients">
      <div className="clients__meta">
        <div className="meta-bar meta-bar-count meta">
          <figure className="meta-bar__line"></figure>
          <div className="row">
            <div className="col">01</div>
            <div className="col">
              <span>05</span>
              <span>●</span>
            </div>
          </div>
        </div>
      </div>
      <div className="clients__header">
        <h2 id="carousel-header">Featured Engagements</h2>
      </div>

      <motion.div className="carousel" ref={carouselRef}>
        <motion.div
          className="carousel__stage"
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          dragElastic={false}
          ref={stageRef}
          style={{
            x,
            transitionTimingFunction: "ease-out",
            transformOrigin: "left",
          }}
        >
          <motion.ul>
            <motion.li className="carousel__stage__item">
              <div className="asset">
                <div className="asset__wrapper">
                  <Image
                    src="/logos/google-dark.svg"
                    alt=""
                    layout="fill"
                    objectPosition={"center left"}
                    objectFit="contain"
                  />
                </div>
              </div>
              <h5 className="clients__title">Google</h5>
              <p className="clients__body">
                Our embedded partnership with Google is as deep as it gets.
                We’re the lead creative agency for Google Store and provide
                strategy, design, and prototyping to other divisions. Learn more
                about our partnership{" "}
                <a href="" className="clients__body__link">
                  here
                </a>
                .
                <br />
              </p>
            </motion.li>
            <motion.li className="carousel__stage__item">
              <div className="asset">
                <div className="asset__wrapper">
                  <Image
                    src="/logos/KFC-Logo.svg"
                    alt=""
                    layout="fill"
                    objectPosition={"center left"}
                    objectFit="contain"
                  />
                </div>
              </div>
              <h5 className="clients__title">KFC</h5>
              <p className="clients__body">
                An award-winning global, digital transformation engagement
                spanning eCommerce, mobile app, and new drive thru experiences.
                Bringing KFC’s brand story to life while making it easier for
                customers to buy chicken. Learn more about our partnership
                <a href="" className="clients__body__link">
                  {" "}
                  here
                </a>
                .
                <br />
              </p>
            </motion.li>
            <motion.li className="carousel__stage__item">
              <div className="asset">
                <div className="asset__wrapper">
                  <Image
                    src="/logos/Wilson-Logo.svg"
                    alt=""
                    layout="fill"
                    objectPosition={"center left"}
                    objectFit="contain"
                  />
                </div>
              </div>
              <h5 className="clients__title">Wilson</h5>
              <p className="clients__body">
                Redesigning the digital flagship for the largest
                telecommunications company in the world. Creating frictionless
                paths to purchase for a wide range of consumers across a vast
                portfolio of products and services.
                <a href="" className="clients__body__link">
                  {" "}
                  here
                </a>
                .
                <br />
              </p>
            </motion.li>
            <motion.li className="carousel__stage__item">
              <div className="asset">
                <div className="asset__wrapper">
                  <Image
                    src="/logos/ATT-Logo.svg"
                    alt=""
                    layout="fill"
                    objectPosition={"center left"}
                    objectFit="contain"
                  />
                </div>
              </div>
              <h5 className="clients__title">AT{"&"}T</h5>
              <p className="clients__body">
                Redesigning the digital flagship for the largest
                telecommunications company in the world. Creating frictionless
                paths to purchase for a wide range of consumers across a vast
                portfolio of products and services.
                <a href="" className="clients__body__link">
                  {" "}
                  here
                </a>
                .
                <br />
              </p>
            </motion.li>
            <li className="carousel__stage__item">
              <div className="asset">
                <div className="asset__wrapper">
                  <Image
                    src="/logos/patagonia-dark.svg"
                    alt=""
                    layout="fill"
                    objectPosition={"center left"}
                    objectFit="contain"
                  />
                </div>
              </div>
              <h5 className="clients__title">Patagonia</h5>
              <p className="clients__body">
                Ongoing partnership providing strategy, branding, experience
                design, and development focused on bringing their mission and
                offerings to consumers through brand-led programs and platforms.
                Read our full case study
                <a href="" className="clients__body__link">
                  {" "}
                  here
                </a>
                .
                <br />
              </p>
            </li>
          </motion.ul>
        </motion.div>
        <div className="carousel__progress">
          <span className="carousel__progress-background">
            <motion.span
              className="carousel__progress-bar"
              ref={barRef}
              initial={{ x: 0 }}
              style={{ x: progressBarX, transitionTimingFunction: "ease-out" }}
            ></motion.span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
