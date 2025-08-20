import React, {useState} from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const articlesData =[
     { title: "Do tour best", status: "Published" , edited: "1 days ago" },
    { title: "Legends fall", status: "Published" , edited: "2 days ago" },
    { title: "Digital Classrooms: Boon or Bane?", status: "Warning" , edited: "2 days ago" },
    { title: "How Reading Habits Shape Young Minds", status: "Warning" , edited: "2 days ago" },
    { title: "The Role of Teachers in a Tech-Driven World", status: "Published" , edited: "3 days ago" },
    { title: "Why Failure Teaches Best", status: "Published" , edited: "3 days ago" },
    { title: "no return", status: "Warning" , edited: "3 days ago" },
    { title: "Exams vs. Skills: What Should We Prioritize?", status: "Warning" , edited: "4 days ago" },
    { title: "The Language of Knowledge", status: "Published" , edited: "4 days ago" },
    { title: "The Power of Curiosity", status: "Warning" , edited: "4 days ago" },
    { title: "Global Citizens Through Education", status: "Warning" , edited: "5 days ago" },
    { title: "The Future of Online Learning", status: "Published" , edited: "5 days ago" },
    { title: "Unleashing Student Potential", status: "Warning" , edited: "6 days ago" },
    { title: "Why Emotional Intelligence Should Be Taught in Schools", status: "Warning" , edited: "6 days ago" },
    { title: "The Future of Learning: Beyond Classrooms", status: "Published" , edited: "6 days ago" },
    
]

export default function Articles(){
    const [page, setPage] = useState(1);
    const articlesPerPage =4 ;
    const totalPages = Math.ceil(articlesData.length/articlesPerPage);
    const displayedArticles = articlesData.slice((page-1)* articlesPerPage,page*articlesPerPage);
      return(
        <div style={{ margin : "20px"}}>
            <h3>My Articles</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Last Edited</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayedArticles.map((article,idx) => (
                            <tr key={idx}>
                                <td>{article.title}</td>
                                <td>{article.status==="Published" ? (
                                    <Badge pill bg="success" >
                                        Published
                                    </Badge>
                                ) :(
                                    <Badge pill bg= "warning">
                                        Draft
                                    </Badge>
                                )
                            }</td>
                                <td>{article.title}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
            <Pagination>
                {[...Array(totalPages)].map((_,i) =>
                (
                    <Pagination.Item
                     key={i+1}
                     active={i+1 === page}
                     onClick={() => setPage(i+1)}
                    >
                        {i+1}

                    </Pagination.Item>
                ))}
            </Pagination>

        </div>
      )




}
   



