import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';

export default function CloudOverview() {
  return (
    <React.Fragment>
      <Grid mt={2} container spacing={2}>
            {
                [{title: 'Communication & Soft-Skills', link: '/SoftSkills', img: 'https://brooksgroup.com/wp-content/uploads/2020/08/soft_skills.jpg', desc: 'Soft skills include interpersonal (people) skills, communication skills, listening skills, time management, and empathy, among others'}].map((item) => (
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
          <TimelineContent>Cloud Overview</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          Day 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Applications of Cloud</TimelineContent>
        </TimelineItem>
        </Timeline>

      <Card style={{width: '100%', marginTop: '10px', marginBottom: '10px'}}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                Prerequisites to learn Cloud Solution
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                

Cloud computing is an advanced sector and requires you to be familiar with multiple subjects because it is related to many technologies.

Here are the primary topics you should know to start learning cloud computing:
<ol>
  <li>Programming Skills</li>
  <li>Familiarity with Databases</li>
  <li>Basics of Security and Privacy</li>
  <li>Knowledge of Agile Development</li>
  <li>Knowledge of Operating Systems</li>
  <li>Understanding of Virtualization</li>
  <li>Networking Basics</li>
  <li>Basics of Public and Private Clouds.</li>
</ol>
                                
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div">
                                <p>Sources</p>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Cloud Computing Tutorial for Beginners - <a href="https://www.youtube.com/watch?v=RWgW-CgdIk0">https://www.youtube.com/watch?v=RWgW-CgdIk0</a>
                                
                                </Typography>
                            </CardContent>
                        </Card>
    </React.Fragment>
  );
}