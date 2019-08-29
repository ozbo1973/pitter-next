import useStyles from "../../static/style/pageLayout";
import { Container, Paper, Grid, Typography } from "@material-ui/core";

const pageLayout = ({ data }) => {
  const classes = useStyles();
  const { imgSrc, title, subTitle, body } = data;

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container direction="column" spacing={3}>
          <Grid item container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} md={5}>
              <div className={classes.img_container}>
                <img className={classes.img} src={imgSrc} />
              </div>
            </Grid>
            <Grid item xs={12} md={7} container spacing={3} direction="column">
              <Grid item className={classes.title}>
                <Typography
                  variant="h2"
                  component="h1"
                  color="textPrimary"
                  gutterBottom
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item className={classes.subTitle}>
                <Typography variant="h4" color="primary">
                  {subTitle}
                </Typography>
              </Grid>

              <Grid item>
                <Paper className={classes.paper}>
                  <Typography
                    align="justify"
                    variant="body1"
                    paragraph
                    color="textPrimary"
                  >
                    {body}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default pageLayout;
