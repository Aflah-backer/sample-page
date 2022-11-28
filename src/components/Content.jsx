import "bootstrap/dist/css/bootstrap.min.css";
import {
  Avatar,
  Card,
  FormControl,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "bootstrap";

function Content() {
  return (
    <>
      <div className="btnTitle">
        <span className="btnContainer">
          <button className="btn">Mine</button>
          <button className="btn">All</button>
        </span>
        <span>
          <h1 className="textHead">social media</h1>
        </span>
        <span>
          <FormControl>
            <Input className="search" type="search" placeholder="Search" />
          </FormControl>
        </span>
      </div>
      <div className="cardContainer">
        <Card bg={"gray"} maxW="md" className="card">
          <Grid
            h="300px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5 , 1fr)"
            gap={4}
          >
            <GridItem className="avatharContainer">
              <Avatar className="avathar" src="https://bit.ly/broken-link" />
            </GridItem>
            <GridItem colSpan={4} >
              <h1>userName</h1>
              <div className="textContainer">
                <p className="textContent">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="footer">
                {/* <h1><FcLike/></h1> */}
                <h2>comments</h2>
              </div>
            </GridItem>
          </Grid>
        </Card>
      </div>
      <div className="footerPost">
    <Input className="input" placeholder='Post Here ...' />
    <button className="postBtn">Post</button>
      </div>
    </>
  );
}

export default Content;
