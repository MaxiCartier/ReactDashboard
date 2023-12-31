import { Card, Table } from "react-bootstrap"
import { TableItem } from "./TableItem"

export const TableMovies = () => {

    const movies = [
        {
            id: crypto.randomUUID(),
            title: "Rambo",
            length: 120,
            rating: 9,
            genres: [
                'acción',
                'bélico'
            ],
            awards: 12
    },
    {
        id: crypto.randomUUID(),
        title: "Las tortugas ninjas",
        length: 90,
        rating: 9,
        genres: [
            'acción',
            'comedia'
        ],
        awards: 12
},
{
    id: crypto.randomUUID(),
    title: "Thor",
    length: 135,
    rating: 8,
    genres: [
        'acción',
        'fantasía'
    ],
    awards: 12
}
    ]

    return (
        <Card className="shadow mb-5">
            <Card.Body>

                <Table striped borderless >
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Géneros</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>

                       {
                        movies.map(({id, title, length, rating, genres, awards}) => <TableItem key={id} title={title} length={length} awards={awards} rating={rating} genres={genres}/>)
                       }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
