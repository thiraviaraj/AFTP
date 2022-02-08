import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';

export default function DataStructure() {
  return (
    <React.Fragment>
      <Grid mt={2} container spacing={2}>
            {
                [{title: 'Data Structures & Algorithm', link: '/dataStructure', img: 'https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k', desc: 'A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.'}].map((item) => (
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
          <TimelineContent>Fundamentals of DataStructure <br />Time & Space Complexity </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Basics Of OOPS <br />SOLID Principles</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Classes, Objects, Arrays & Pointers</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Linked List, hash table & graphs <br /> Stacks, Queues & trees</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 5 - 1<sup>st</sup> Session
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Recurssion, Sorting & Searching</TimelineContent>
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
                                Prerequisites
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                The prerequisites for data structures and algorithms (DSA) are knowledge of programming languages, basics of mathematics, organising and problem-solving ability.
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div">
                                <p>Sources</p>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Data Structures and Algorithms for Beginners - <a href="https://www.youtube.com/watch?v=BBpAmxU_NQo">https://www.youtube.com/watch?v=BBpAmxU_NQo</a>
                                <br>
                                </br>
                                Object-oriented Programming in 7 minutes | Mosh - <a href="https://www.youtube.com/watch?v=pTB0EiLXUC8">https://www.youtube.com/watch?v=pTB0EiLXUC8</a>
                                </Typography>
                            </CardContent>
                        </Card>
    </React.Fragment>
  );
}