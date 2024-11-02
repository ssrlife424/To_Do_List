import { Card ,CardContent, Typography, Button} from "@mui/material";



function TodoItem({todo, fetchDetailsOfCurrentTodo}) {
// console.log(todo);

    return <Card sx = {{
        maxWidth: 350,
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between"
    }}>
        <CardContent>
            <Typography variant = 'h5' color = {'text.secondary'}>
                {todo?.todo}
            </Typography>
        </CardContent>
        <CardContent>
            <Button 
            onClick={() => fetchDetailsOfCurrentTodo(todo?.id) }
             sx = {{
                backgroundColor:" #000000",
                color: "#FFFFFF",
                opacity: "0.9",
                "&:hover":{
                    backgroundColor:" #000000",
                color: "#FFFFFF",
                opacity: "1"
                },
            }
            }>Show Details</Button>
        </CardContent>
    </Card>
}


export default TodoItem;