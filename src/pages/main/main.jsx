import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//import components
import Links from "../../components/Links/links";
import Boxs from "../../components/boxs/boxStructure/boxs";
import BoxTitle from "../../components/boxs/boxTitle/boxTitle";
import BoxsCaption from "../../components/boxs/boxsCaption/boxsCaption";
import Navbar from "../../components/navbar/navbar";
import OtherEreas from "../../components/otherEreas/otherEreas";
import SisterProject from "../../components/sisterProjects/sisterProjectStructure/sisterProjects";
import Articles from "../../components/wikipediaLanguages/wikiarticles/articles";

//import imgs
import BoxsImages from "../../components/boxs/boxsImg/boxsImg";

//style
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Main = () => {
  return (
    <>
      <Navbar />
      <Boxs bg=" bg-light " txtCenter=" text-center ">
        <div className="m-0">
          <div className="fs-5">
            Welcome to <Links urls="/wikipedia" linkTxt="Wikipedia" />,
          </div>
        </div>
        <div className="m-0 text-b">
          the <Links urls="/wikipedia" linkTxt="free encyclopediakipedia" />{" "}
          that <Links urls="/wikipedia" linkTxt="anyone can edit." />
        </div>
        <div className="mt-md-1 m-0">
          {" "}
          <Links urls="/wikipedia" linkTxt="6,427,298" /> articles in{" "}
          <Links urls="/wikipedia" linkTxt="English" />
        </div>
      </Boxs>
      <div className="row gx-1 ">
        <div className="col-md-6 col-12 d-flex flex-fill ">
          <Boxs bg="bg-success">
            <BoxTitle
              txt="From today's featured article"
              bg="#CEF2E0"
              bordr="1px solid  #A3BFB1"
            />
            <picture>
              <LazyLoadImage
                src={BoxsImages.MaryamMirzakhani}
                className="col-md-6 float-start mb-3 me-md-3 me-2 img-fluid mt-1 w-25"
                alt="Maryam Mirzakhani"
              />
              {/* <figcaption className="figure-caption">A caption for the Maryam Mirzakhani </figcaption> */}
            </picture>
            <div className="ms-2">
              <span className="fw-bold">
                <Links urls="/wikipedia" linkTxt="Maryam Mirzakhani" />
              </span>{" "}
              was an Iranian <Links urls="/wikipedia" linkTxt="mathematician" />{" "}
              and a <Links urls="/wikipedia" linkTxt="professor" /> of
              mathematics at{" "}
              <Links urls="/wikipedia" linkTxt="Stanford University" />. Her
              research topics included{" "}
              <Links urls="/wikipedia" linkTxt="Teichmüller theory" />,{" "}
              <Links urls="/wikipedia" linkTxt="hyperbolic geometry" /> ,{" "}
              <Links urls="/wikipedia" linkTxt="ergodic theory" />, and{" "}
              <Links urls="/wikipedia" linkTxt="symplectic geometry" />. In
              2005, as a result of her research, she was honored in Popular
              Science's fourth annual "Brilliant 10" in which she was
              acknowledged as one of the top 10 young minds who have pushed
              their <Links urls="/wikipedia" linkTxt="fields" /> in innovative
              directions. On 13 August 2014, Mirzakhani was honored with the{" "}
              <Links urls="/wikipedia" linkTxt="Fields Medal" />, the most
              prestigious award in mathematics, becoming the first Iranian to be
              honored with the award and the first of only two women to date.
              The award committee cited her work in "
              <Links
                urls="/wikipedia"
                linkTxt="the dynamics and geometry of Riemann surfaces and their moduli spaces"
              />
              " Mirzakhani made several contributions to the theory of moduli
              spaces of Riemann surfaces. Mirzakhani's early work solved the
              problem of counting simple closed geodesics on hyperbolic Riemann
              surfaces by finding a relationship to volume calculations on
              moduli space. Geodesics are the natural generalization of the idea
              of a "<Links urls="/wikipedia" linkTxt="straight line" />" to
              "curved spaces". Slightly more formally, a curve is a geodesic if
              no slight deformation can make it shorter. Closed geodesics are
              geodesics which are also closed curves—that is, they are curves
              that close up into loops. A closed geodesic is simple if it does
              not cross itself. Mirzakhani solved this counting problem by
              relating it to the problem of computing volumes in moduli space—a
              space whose points correspond to different complex structures on a
              surface genus g. In her thesis, Mirzakhani found a{" "}
              <Links urls="/wikipedia" linkTxt="volume formula" /> for the
              moduli space of bordered Riemann surfaces of genus n geodesic
              boundary components. From this formula followed the counting for
              simple closed geodesics mentioned above, as well as a number of
              other results. This led her to obtain a new proof for the formula
              discovered by Edward Witten and Maxim Kontsevich on the
              intersection numbers of tautological classes on moduli space
            </div>
            <BoxsCaption />
            <BoxTitle
              txt="Did you know ..."
              bg="#CEF2E0"
              bordr="1px solid  #A3BFB1"
            />
            <picture>
              <LazyLoadImage
                src={BoxsImages.Earthrise}
                className="col-md-6 float-end mb-3 ms-md-3 ms-2 img-fluid mt-1 w-25"
                alt="Earthrise"
              />
            </picture>
            <ul>
              <li>
                ... that <Links urls="/wikipedia" linkTxt="William Anders" />{" "}
                took the iconic photograph Earthrise (
                <Links urls="/wikipedia" linkTxt="pictured" />
                )?
              </li>
              <li>
                ... that an investigation into{" "}
                <Links urls="/wikipedia" linkTxt="the Royal Oak post office" />{" "}
                shootings led one congressman to accuse the Postal Service of
                having been "
                <Links urls="/wikipedia" linkTxt="asleep at the switch" />
                "?
              </li>
              <li>
                ... that <Links urls="/wikipedia" linkTxt="Gil Kim" /> played
                professional <Links urls="/wikipedia" linkTxt="baseball" /> in
                the <Links urls="/wikipedia" linkTxt="Netherlands" />,{" "}
                <Links urls="/wikipedia" linkTxt="China" />,{" "}
                <Links urls="/wikipedia" linkTxt="Australia" />,{" "}
                <Links urls="/wikipedia" linkTxt="Spain" />, and
                <Links urls="/wikipedia" linkTxt="Venezuela" /> , scouted in{" "}
                <Links urls="/wikipedia" linkTxt="Mexico" /> and the{" "}
                <Links urls="/wikipedia" linkTxt="Dominican Republic" />, and
                coaches in <Links urls="/wikipedia" linkTxt="Canada" />?
              </li>
              <li>
                ... that the first{" "}
                <Links urls="/wikipedia" linkTxt="Catholic synod" /> in{" "}
                <Links urls="/wikipedia" linkTxt="China" /> was held in 1803
                near Chungkingchow in Sichuan Province?
              </li>
              <li>
                ... that the first{" "}
                <Links urls="/wikipedia" linkTxt="Catholic synod" /> in{" "}
                <Links urls="/wikipedia" linkTxt="China" /> was held in 1803
                near Chungkingchow in Sichuan Province?
              </li>
              <li>
                ... that <Links urls="/wikipedia" linkTxt="badminton" /> in
                Singapore began in the early 19th century?
              </li>
              <li>
                ... that <Links urls="/wikipedia" linkTxt="Golf Digest" /> has
                described "Narco" as having "a fire beat"?
              </li>
              <li>
                ... that <Links urls="/wikipedia" linkTxt="Golf Digest" /> has
                described "Narco" as having "a fire beat"?
              </li>
              <li>
                ... that former Atalanta player{" "}
                <Links urls="/wikipedia" linkTxt="Andrea Rinaldi" /> died of an
                aneurysm aged 19 in 2020?
              </li>
              <li>
                ... that Who is the{" "}
                <Links urls="/wikipedia" linkTxt="richest man" /> in the world?
              </li>
              <li>
                ... that the walls of the{" "}
                <Links urls="/wikipedia" linkTxt="Kronberg Academy" />
                's Casals Forum are curved and covered with wood in a manner
                reminiscent of a string instrument?
              </li>
              <li>
                ... that there is a{" "}
                <Links urls="/wikipedia" linkTxt="Loch Ness Monster" /> in
                Williamsburg, Virginia?
              </li>
              <li>
                ... that the walls of the{" "}
                <Links urls="/wikipedia" linkTxt="Kronberg Academy" />
                's Casals Forum are curved and covered with wood in a manner
                reminiscent of a string instrument?
              </li>
              <li>
                ... that there is a{" "}
                <Links urls="/wikipedia" linkTxt="Loch Ness Monster" /> in
                Williamsburg, Virginia?
              </li>
            </ul>
            <BoxsCaption />
          </Boxs>
        </div>
        <div className="col-md-6 col-12 d-flex flex-fill ">
          <Boxs bg="bg-info">
            <BoxTitle
              txt="In the news"
              bg="#CEDFF2"
              bordr="1px solid  #A3B0BF"
            />
            <picture>
              <LazyLoadImage
                src={BoxsImages.LouisVuitton}
                className="col-md-6 float-end mb-3 ms-md-3 ms-2 img-fluid mt-1 w-25"
                alt="Louis Vuitton"
              />
              {/* <figcaption className="figure-caption">Coco Chanel</figcaption> */}
            </picture>
            <div>
              <strong>Louis Vuitton Malletier</strong>, commonly known as Louis
              Vuitton , is a French luxury{" "}
              <Links urls="/wikipedia" linkTxt="fashion house" /> and company
              founded in 1854 by{" "}
              <Links urls="/wikipedia" linkTxt="Louis Vuitton" />. The label's
              LV <Links urls="/wikipedia" linkTxt="monogram" /> appears on most
              of its products, ranging from luxury bags and leather goods to
              ready-to-wear, shoes, watches, jewelry, accessories, sunglasses
              and books. Louis Vuitton is one of the world's leading
              international fashion houses. It sells its products through
              standalone boutiques, lease departments in high-end departmental
              stores, and through the{" "}
              <Links urls="/wikipedia" linkTxt="e-commerce" /> section of its
              website. For six consecutive years (2006–2012), Louis Vuitton was
              named the world's most valuable luxury{" "}
              <Links urls="/wikipedia" linkTxt="brand" />. Its 2012 valuation
              was US$25.9 billion. In 2013, the valuation of the brand was
              US$28.4 billion with <Links urls="/wikipedia" linkTxt="revenue" />{" "}
              of US$9.4 billion. The company operates in 50 countries with more
              than 460 stores worldwide. The company actively seeks to eradicate
              counterfeiting, and employs a team of lawyers and special
              investigation agencies to pursue offenders through the courts
              worldwide. The company allocates approximately half of its
              communications budget to counteract counterfeiting of its goods.
              LVMH, Vuitton's parent company, has described "Some 60 people at
              various levels of responsibility working full-time on
              anti-counterfeiting in collaboration with a wide network of
              outside investigators and a team of lawyers."The company closely
              controls the distribution of its products. Until the 1980s,
              Vuitton products were widely sold in department stores, such as
              Neiman Marcus and Saks Fifth Avenue. Today, Vuitton products are
              primarily available at company-owned Louis Vuitton boutiques, with
              a small number of exceptions noted in upscale shopping districts
              or inside luxury department stores. Company boutiques within
              department stores operate independently, and are operated by
              company managers and employees. LV has an official online store,
              through its main website. In 2006, the company filed a lawsuit
              against Colorado-based Manifest Information Services Ltd. (aka
              Manifest Hostmaster and Manifest.com), through WIPO, in order to
              compel Manifest transfer the domain name LV.com to Louis Vuitton;
              the legal action failed and the domain was subsequently acquired
              by Liverpool Victoria (LV=), England's largest fraternal insurance
              company.Louis Vuitton has been operating in China for 30 years and
              nowadays the country is the main market for the French maison,
              boasting about 40 offline stores nationwide Several high-profile
              rap music artists have mentioned the company in song lyrics, most
              notably: Kanye West, Juicy J, and Wiz Khalifa.
            </div>
            <BoxsCaption />
            <BoxTitle
              txt="On this day"
              bg="#CEDFF2"
              bordr="1px solid  #A3B0BF"
            />
            <picture className="col-md-6 float-end ms-2 mt-1 ms-md-3 w-25">
              <LazyLoadImage
                src={BoxsImages.albertEinstein}
                className=" img-fluid  "
                alt="albertEinstein"
              />
              <figcaption className="figure-caption">
                albert einsteina
              </figcaption>
            </picture>
            <div>
              <strong>Albert Einstein</strong> was a German-born{" "}
              <Links urls="/wikipedia" linkTxt="theoretical physicist" />,
              widely acknowledged to be one of the greatest and most influential
              physicists of all time. Einstein is best known for developing the{" "}
              <Links urls="/wikipedia" linkTxt="theory of relativity" />, but he
              also made important contributions to the development of the theory
              of quantum mechanics. Relativity and quantum mechanics are
              together the two pillars of modern physics. His massenergy
              equivalence formula <Links urls="/wikipedia" linkTxt="E = mc2" />,
              which arises from relativity theory, has been dubbed "the world's
              most famous equation". His work is also known for its influence on
              the philosophy of science. He received the 1921{" "}
              <Links urls="/wikipedia" linkTxt="Nobel Prize in Physics" /> "for
              his services to theoretical physics, and especially for his
              discovery of the law of the{" "}
              <Links urls="/wikipedia" linkTxt="photoelectric effect" />
              ", a pivotal step in the development of quantum theory. His
              intellectual achievements and originality resulted in "Einstein"
              becoming synonymous with "genius". In 1905, a year sometimes
              described as his annus mirabilis ('miracle year'), Einstein
              published four groundbreaking papers.These outlined the theory of
              the photoelectric effect, explained Brownian motion, introduced
              special relativity, and demonstrated mass-energy equivalence.
              Einstein thought that the laws of classical mechanics could no
              longer be reconciled with those of the electromagnetic field,
              which led him to develop his special theory of relativity.
            </div>
            <BoxsCaption />
          </Boxs>
        </div>
      </div>

      <Boxs bg="bg-danger">
        <BoxTitle
          txt="Today's featured picture"
          bg="#DDCEF2"
          bordr="1px solid  #AFA3BF"
        />
        <picture>
          <LazyLoadImage
            src={BoxsImages.GUCCI}
            className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid 
                         "
            alt="GUCCI"
          />
        </picture>
        <div>
          <strong>Gucci</strong> is an Italian high-end{" "}
          <Links urls="/wikipedia" linkTxt="luxury fashion" /> house based in{" "}
          <Links urls="/wikipedia" linkTxt="Florence" />, Italy. Its product
          lines include handbags, ready-to-wear, footwear, accessories, and home
          decoration; and it licenses its name and branding to{" "}
          <Links urls="/wikipedia" linkTxt="Coty, Inc." /> for fragrance and
          cosmetics under the name Gucci Beauty. Gucci was founded in 1921 by{" "}
          <Links urls="/wikipedia" linkTxt="Guccio Gucci" /> (1881–1953) in{" "}
          <Links urls="/wikipedia" linkTxt="Florence" />,{" "}
          <Links urls="/wikipedia" linkTxt="Tuscany" />. Under the direction of{" "}
          <Links urls="/wikipedia" linkTxt="Aldo Gucci" /> (son of Guccio),
          Gucci became a worldwide-known brand, an icon of the Italian Dolce
          Vita. Following family feuds during the 1980s, the Gucci family was
          entirely ousted from the capital of the company by 1993. After this
          crisis, the brand was revived with a provocative 'Porno Chic' props.
          In 1999, Gucci was acquired by the French conglomerate{" "}
          <Links urls="/wikipedia" linkTxt="Pinault Printemps Redoute" />, which
          later became <Links urls="/wikipedia" linkTxt="Kering" />. During the
          2010s, Gucci became an iconic '
          <Links urls="/wikipedia" linkTxt="geek-chic" />' brand. In 2019, Gucci
          operated 487 stores for 17,157 employees, and generated €9.628 billion
          in sales (€8.2 billion in 2018).{" "}
          <Links urls="/wikipedia" linkTxt="Marco Bizzarri" /> is CEO of Gucci
          since December 2014, and{" "}
          <Links urls="/wikipedia" linkTxt="Alessandro Michele" /> creative
          director since January 2015. Gucci is a subsidiary of the French
          luxury group <Links urls="/wikipedia" linkTxt="Kering" />. Gucci
          launched a Rolls-Royce luggage set in 1970 and partnered with American
          Motors Corporation (AMC) to create the Gucci version of the AMC Hornet
          that was marketed during the 1971, 1972, and 1973 model years. The
          Gucci Sportabout wagon became one of the first American cars to offer
          a special luxury trim package created by a famous fashion designer.
          Gucci launched Gucci Perfumes (Il Mio Profumo) and its first watch
          (Model 2000) in 1972, its first franchised store in the US in 1973,
          and opened the Gucci Galleria in its Beverly Hills store in 1977, a
          private art gallery adjoined to the store and reserved to premium
          clients who were given a golden key to access it. From 1978 to 1984 a
          Miami-based coachbuilder marketed a Gucci edition of the Cadillac
          Seville sedan (the 1978 model is exhibited at the Gucci Museum). In
          1985, the Gucci loafer became part of the permanent collection of the
          New York Moma. Since 2019, originally in celebration of{" "}
          <Links urls="/wikipedia" linkTxt="Mickey Mouse" />
          's 90th birthday, Gucci has held a collection of Disney apparel,
          including for <Links urls="/wikipedia" linkTxt="Lunar New Year" />.
          <BoxsCaption />
        </div>
      </Boxs>

      <Boxs bg="bg-light">
        <BoxTitle
          txt="Other areas of Wikipedia"
          bg="#EEEEEE"
          bordr="1px solid  #cfcece"
        />
        <ul className="list-unstyled ms-md-1">
          <OtherEreas />
        </ul>
        <BoxTitle
          txt="Wikipedia's sister projects"
          bg="#EEEEEE"
          bordr="1px solid  #cfcece"
        />
        <div className="ms-0 mb-3">
          Wikipedia is written by volunteer editors and hosted by the Wikimedia
          Foundation, a non-profit organization that also hosts a range of other
          volunteer projects:
        </div>

        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3  row-cols-md-2 row-cols-1 mb-2 g-3">
            <SisterProject />
          </div>
        </div>
        <BoxTitle
          txt="Wikipedia languages"
          bg="#EEEEEE"
          bordr="1px solid  #cfcece"
        />
        <div className="my-3">
          This Wikipedia is written in{" "}
          <Links urls="/wikipedia" linkTxt="English" />. Many{" "}
          <Links urls="/wikipedia" linkTxt="other Wikipedias are available" />;
          some of the largest are listed below.
        </div>
        <Articles />
      </Boxs>
    </>
  );
};

export default Main;
