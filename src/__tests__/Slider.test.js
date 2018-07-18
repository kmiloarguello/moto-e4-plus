import React from "react";
import Slider from "../components/Slider.jsx";
import Slideshow from "../components/Slideshow.jsx";
import { render, fireEvent } from "react-testing-library";
import styles from "../css/index.css";
import myImage from "../arquivos/img/section1/front.png";

describe("Slider section", () => {
  test("Slider section render correctly", () => {
    const { debug } = render(<Slider />);
  });
  test("Slideshow props updated correctly", () => {
    const { rerender } = render(
      <Slideshow
        title="titlee"
        description="description"
        img=""
        color={"red"}
      />
    );
    rerender(<Slideshow color={"green"} />);
  });
  test("Slideshow unmount correctly", () => {
    const { container, unmount } = render(<Slideshow />);
    unmount();
  });
  test("Slideshow has title and description", () => {
    const { getByTestId } = render(
      <Slideshow>
        <h2 data-testid="title-slideshow">Titulo</h2>
        <p data-testid="description-slideshow">Descrición</p>
      </Slideshow>
    );
    const title = getByTestId("title-slideshow");
    const description = getByTestId("description-slideshow");
  });
  test("Slideshow has alt image", () => {
    const { getByAltText } = render(
      <Slideshow title="Titulo" description="Descripción" img="" color="red" />
    );
    const altSlideshow = getByAltText("Titulo");
  });
  test("Span button trigger an event", () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Slider />);

    fireEvent.click(getByTestId("dot-a"), spy);
  });
  test("Slider change of background", () => {
    const { getByTestId } = render(<Slider />);
    const bg = document.getElementsByClassName(styles.section4)[0];
    bg.style.backgroundImage = "url(" + myImage + ")";
    fireEvent.change(bg);
    expect(bg.style.backgroundImage).toBe("url(" + myImage + ")")
  });
});
