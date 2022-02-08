import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';

export default function DesignPattern() {
  return (
    <React.Fragment>
      <Grid mt={2} container spacing={2}>
            {
                [{title: 'Design Patterns', link: '/DesignPattern', img: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ebdnqnmv3qqc16jzlkzs.jpg', desc: 'Design pattern is a general repeatable solution to a commonly occurring problem in software design.'}].map((item) => (
                    <Grid key={item.title} container justifyContent="center" direction="column"
                        alignItems="center" item xs={12} md={12} >
                        <Card style={{width: '100%'}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   {item.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }

        </Grid>
        <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Day 1
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Overview on Design Pattern</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Creational Design Pattern</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Structural Design Pattern</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Behavioral Design Pattern</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 5 - 1<sup>st</sup> Session
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Practical Applications of design patterns</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="purple">
          Day 5 - 2<sup>nd</sup> Session
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="purple">Q & A - Evaluating your understanding</TimelineContent>
        </TimelineItem>
      </Timeline>

      <Card style={{width: '100%', marginTop: '10px', marginBottom: '10px'}}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                            <p>Prerequisites</p>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Object Oriented Programming basics (inheritance; encapsulation; polymorphism; interfaces; abstract classes; virtual methods; overriding; overloading).
                                </Typography>

                            <Typography gutterBottom variant="h6" component="div">
                                <p>Sources</p>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Design Patterns  <a href="https://www.youtube.com/watch?v=NU_1StN5Tkk">https://www.youtube.com/watch?v=NU_1StN5Tkk</a>
                                <br />
                                </Typography>
                            </CardContent>
                        </Card>
    </React.Fragment>
  );
}