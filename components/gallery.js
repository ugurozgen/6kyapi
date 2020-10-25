import Carousel from "react-material-ui-carousel"
import { Paper, Grid } from "@material-ui/core"

const gallery = require("../public/gallery.json")

export default function Gallery(props) {
  let items
  for (const section of gallery) {
    if (section.name === props.section) {
      items = section.images
    }
  }

  return (
    <Carousel autoPlay={false} indicators={true} navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <img width="100%" src={props.item} />
        </Paper>
      </Grid>
    </Grid>
  )
}
