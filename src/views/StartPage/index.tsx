import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import {
    Link
  } from "react-router-dom";
  
  
const StartPage = () => {
    const copyUrl = (item: string) => {
        const el = document.createElement('input');
        el.value = window.origin + item;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    return(

    <>
        <Grid mt={2} container spacing={2}>
            {
                [{title: 'Data Structures & Algorithm', link: '/dataStructure', img: 'https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k', desc: 'A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.'}, {title: 'Design Patterns', link: '/DesignPattern', img: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ebdnqnmv3qqc16jzlkzs.jpg', desc: 'Design pattern is a general repeatable solution to a commonly occurring problem in software design.'}, {title: 'Project Management Essentials', link: '/ProjectEssentials', img: 'https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2019/02/How_to_Build_Use_Project_Plan_Template_1.jpg', desc: ' Developer tools, Editors, designers, and debuggers to develop for any platform.'}, {title: 'Communication & Soft-Skills', link: '/SoftSkills', img: 'https://brooksgroup.com/wp-content/uploads/2020/08/soft_skills.jpg', desc: 'Soft skills include interpersonal (people) skills, communication skills, listening skills, time management, and empathy, among others'}, {title: 'Architecture & Cloud Overview', link: '/CloudOverview', img: 'https://hackersandslackers-cdn.storage.googleapis.com/2020/12/gcp_series_redo-3.png', desc: 'cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence'}, {title: 'Final Assessment', link: '', img: 'https://3.bp.blogspot.com/-D15CgX2pfa0/XEryOQs3exI/AAAAAAAAFUQ/A-psGxC-EHkLpKF-Rz6W-8pIA04qGUxLgCLcBGAs/s1600/writing.jpg', desc: 'Last activity you must complete to enter into a project'}].map((item) => (
                    <Grid key={item.title} container justifyContent="center" direction="column"
                        alignItems="center" item xs={12} md={4} >
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
                                <Typography style={{height: '50px'}} variant="body2" color="text.secondary">
                                   {item.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            {item.link ? <>
                                <Button size="small" onClick={()=>copyUrl(item.link)}>Copy Link</Button>
                                <Button size="small"><Link to={item.link} className='noLinkStyle'>Learn More</Link></Button>
                            </>: <Button size="small"><Link to='/TimelinePage' className='noLinkStyle'>Overall Timeline</Link></Button>}
                                </CardActions>
                        </Card>
                    </Grid>
                ))
            }

        </Grid>
    </>
)}

export default StartPage;