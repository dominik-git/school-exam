import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("Button", module).add("test button with text", () => (
  <Button onClick={action("clicked")}>Test text</Button>
));
