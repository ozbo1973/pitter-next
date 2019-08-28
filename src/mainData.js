export const navLinks = ["journalist", "memorial", "friendship", "scholarship"];

const mainData = {
  journalist: {
    imgSrc: "/static/img/sahbu.jpg",
    title: "The Journalist",
    subTitle: "Pitter had a Nose for News",
    body: (
      <>
        Pat was a journalist at heart and had a thurst for finding the truth.
        Pitter was not afraid to ask tough questions no matter who he was
        interviewing. In 2013 Pat teamed up with{" "}
        <a href="http://sahbu.org/cause/" target="_blank">
          Sahbu
        </a>{" "}
        founder Mitch Weight to help with devestating situtation for children in
        Liberia. They embarked on a trip to Liberia to attempt to bring to light
        the many issues including 80% of school age girls have turned to
        prostituion, and 66% of girls 10-19 have been raped.
      </>
    )
  },
  memorial: {
    imgSrc: "/static/img/pat-family4.jpg",
    title: "The Memorial",
    subTitle: "In Memory of a Brother and Son",
    body: (
      <>
        Pats family has created a{" "}
        <a
          href="https://www.facebook.com/Patrparkinson/?modal=media_composer&ref=page_homepage_panel"
          target="_blank"
        >
          facebook page
        </a>{" "}
        to remember Pat and his "very interesting" life. The daily posts from
        Pats Memorial page are the only thing that keeps connected to facebook
        and is a great to get to know Pat and his unique personality. Click the
        more info button to view a tribute Pat's brothers wrote.
      </>
    )
  },
  friendship: {
    imgSrc: "/static/img/pat-bb.jpg",
    title: "The Friend",
    subTitle: "Loyal and Dynamic Friend",
    body: (
      <>
        The day I learned Pat had passed away, it didn’t really hit me until
        later that night and I broke down in tears. I was humbled and honored
        when Pats family asked me to speak at his
        <a href="http://www.lindquistmortuary.com/notices/Patrick-Parkinson">
          Celebration of Life
        </a>
        . Click the more info button to read the tribute I had written for my
        life long friend.
      </>
    )
  },
  scholarship: {
    imgSrc: "./static/img/pat-grad.jpg",
    title: "The Scholarship",
    subTitle: "WSU Scholarship for Journalism",
    body: (
      <p>
        In memory of Patrick and his love for journalism his parents established
        a scholarship for an outstanding student in journaism at Weber State
        University where Pat graduated in 1998. You can donate to the
        scholarship to help keep the memory of Pitter alive and helping young
        journaists succeed.
      </p>
    )
  }
};

export default mainData;
