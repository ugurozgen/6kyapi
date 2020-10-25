import Carousel from "react-material-ui-carousel"
import { Paper } from "@material-ui/core"

const gallery = require("../public/gallery.json")

export default function Gallery(props) {
  let items
  for (const section of gallery) {
    if (section.name === props.section) {
      items = section.images
    }
  }

  return (
    <Carousel indicators="true" navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper elevation={0}>
      <img src={props.item} />
    </Paper>
  )
}
