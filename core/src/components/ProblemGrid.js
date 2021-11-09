/*eslint-disable */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../css/ProblemGrid.css';

import * as InputVaildtion from './InputValidation'
//그리드 박스 스타일 속성 적용
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
    boxShadow: 'none'
}));

//텍스트 필드 속성 적용
const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#9A30AE',
        },
        '&:hover fieldset': {
            borderColor: 'pink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});


function ProblemGrid(props) {
    let [grid_data, setGrid_data] = useState(props.grid_data);
    let sub_list = [];
    // 입력값, 출력값 초기세팅 
    let input_list = [];
    let output_list = [];
    let [input_data, setInput_data] = useState(props.input_data)
    let [output_data, setOutput_data] = useState(props.output_data)
    //피드백 세팅
    let feedback_textfield = [];

    // 텍스트 필드 값 바꾸기 
    const handleGridChange = (event) => {
        const { value, name } = event.target;
        console.log(value);
        console.log(name);
        setGrid_data(InputVaildtion.newTextfieldValue(grid_data, value, name));
    }
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setInput_data(InputVaildtion.newTextfieldValue(input_data, value, name));
    }
    const handleOutputChange = (event) => {
        const { value, name } = event.target;
        setOutput_data(InputVaildtion.newTextfieldValue(output_data, value, name));
    }
    //등록 수정
    if (grid_data[0].value === "register_modify") {
        for (let index = 3; index < 6; index++) {
            sub_list.push(
                <Grid key={index} item xs={12}>
                    <Item key={grid_data[index].id}>
                        <p key={grid_data[index].title} className="grid_data_title">{grid_data[index].title}</p>
                        <CssTextField key={grid_data[index].input} fullWidth label={grid_data[index].input} variant="outlined" id="custom-css-outlined-input" multiline rows={10}
                            name={grid_data[index].title} value={grid_data[index].value} onChange={handleGridChange} />
                    </Item>
                </Grid>
            )
        }

        input_data.map((input, index) => {
            input_list.push(
                <Item key={index}>
                    <CssTextField key={input.input} fullWidth label={input.input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                        name={input.id} value={input.value} onChange={handleInputChange} />
                </Item>
            )
        })
        output_data.map((output, index) => {
            output_list.push(
                <Item key={index}>
                    <CssTextField key={output.input} fullWidth label={output.input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                        name={output.id} value={output.value} onChange={handleOutputChange} />
                </Item>
            )
        })
    }
    //선생님 피드백 
    else if (grid_data[0].value === 'teacher - feedBack') {
        input_data.map((input, index) => {
            input_list.push(
                <Item key={index}>
                    <p key={input.title} className="grid_data">{input.input}</p>
                </Item>
            )
        })
        output_data.map((output, index) => {
            output_list.push(
                <Item key={index}>
                    <CssTextField key={output.input} fullWidth label={output.input} variant="outlined" id="custom-css-outlined-input" maxRows={1}
                        name={output.id} value={output.value} onChange={handleOutputChange} />
                </Item>
            )
        })

        for (let index = 3; index < 8; index++) {
            let xs = 6;


            if (index == 3 || index == 4 || index == 7)
                xs = 12;
            sub_list.push(
                <Grid key={grid_data[index].id} item xs={xs} >
                    <Item key={grid_data[index].title}>
                        <p key={grid_data[index].input} className="grid_data_title">{grid_data[index].title}</p>
                        <p key={grid_data[index].value} className="grid_data">{grid_data[index].value}</p>
                    </Item>
                </Grid>)
        }
        feedback_textfield.push(
            <Grid key={grid_data[0].value} item xs={12}>
                <Item key={grid_data[0].id}>
                    <p key={grid_data[8].title} className="grid_data_title">{grid_data[8].title}</p>
                    <CssTextField key={grid_data[8].input} fullWidth label={grid_data[8].input} variant="outlined" id="custom-css-outlined-input" multiline rows={5}
                        name={grid_data[8].title} value={grid_data[8].value} onChange={handleGridChange} />
                </Item>

            </Grid>
        )
    }


    return (
        <Box component="form"
            noValidate
            autoComplete="off" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                {/* 상단 문제 챕터 및 단원 */}
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[1].title}</p>
                        <p className="grid_data">{props.mainunit}단원</p>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <p className="grid_data_title">{grid_data[2].title}</p>
                        <p className="grid_data">{props.subunit}번</p>
                    </Item>
                </Grid>
            </Grid>

            <Grid container spacing={2} columns={12}>
                {/* 여기까지 등록, 수정, 피드백 그리드 동일 !!! */}

                {sub_list}
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{input_data[0].title}</p>
                    </Item>
                    {input_list}
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>
                        <p className="grid_data_title">{output_data[0].title}</p>
                    </Item>
                    {output_list}
                </Grid>
                {feedback_textfield}
            </Grid>

        </Box>


    )
}

export default ProblemGrid;