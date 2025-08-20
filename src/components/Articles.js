import React, {useState} from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const articlesData =[
     { title: "Do tour best", status: "Published" , edited: "2 days ago" },
    { title: "Legends fall", status: "Published" , edited: "2 days ago" },
    { title: "no return", status: "Published" , edited: "2 days ago" },
]

export default function Articles(){
    const [page, setPage] = useState(1);
    const articlesPerPage =2 ;
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
   



