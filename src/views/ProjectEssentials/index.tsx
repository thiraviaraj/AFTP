import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';

export default function ProjectEssentials() {
  return (
    <React.Fragment>
      <Grid mt={2} container spacing={2}>
            {
                [{title: 'Project Management Essentials', link: '/ProjectEssentials', img: 'https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2019/02/How_to_Build_Use_Project_Plan_Template_1.jpg', desc: ' Developer tools, Editors, designers, and debuggers to develop for any platform.'}].map((item) => (
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
          <TimelineContent>HTML Fundamentals</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>CSS Fundamentals</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>SQL Part 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>SQL Part 2</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 5
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Exception handling</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          Day 6
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>GIT & Collaborative Programming</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          Day 7
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Basic deployment and CICD</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          Day 8
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Package Managers, Build Tools & Unit Testing</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
          Day 9
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Chrome Debuggging</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="purple">
          Day 10
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
                                  Basic Programming knowledge is required
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div">
                                <p>Sources</p>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                HTML Tutorial for Beginners: HTML Crash Course  - <a href="https://www.youtube.com/watch?v=qz0aGYrrlhU">https://www.youtube.com/watch?v=qz0aGYrrlhU</a>
                                <br>
                                </br>
                                Learn HTML & CSS in 2022 | Crash Course  - <a href="https://www.youtube.com/watch?v=gXLjWRteuWI">https://www.youtube.com/watch?v=gXLjWRteuWI</a>
                                <br>
                                </br>
                                SQL Basics for Beginners - <a href="https://www.youtube.com/watch?v=zbMHLJ0dY4w">https://www.youtube.com/watch?v=zbMHLJ0dY4w</a>
                                </Typography>
                                
                            </CardContent>
                        </Card>
    </React.Fragment>
  );
}