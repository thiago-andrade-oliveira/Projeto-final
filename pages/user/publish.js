import { Container, Typography, Box, TextField, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    boxContainer: {
        paddingBottom:theme.spacing(3),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
}))

const Publish = () => {
    const classes = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth='sm' className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Título do Anúncio
                </Typography>
                <TextField 
                    label="ex.: Bicicleta com aro 18 com garantia"
                    size="small"
                    fullWidth
                />

                <br /><br />
                <Typography component="h6" variant="h6" color="textPrimary">
                    Categoria
                </Typography>
                <Select
                    native
                    value=""
                    fullWidth
                    onChange={() => {}}
                    inputProps={{
                        name: 'age',
                    }}
                >
                    <option value="">Selecione</option>
                    <option value={1}>Bebê e Criança</option>
                    <option value={2}>Agricultura</option>
                    <option value={3}>Moda</option>
                    <option value={3}>Carros, Motos e Barcos</option>
                    <option value={3}>Serviços</option>
                    <option value={3}>Lazer</option>
                    <option value={3}>Animais</option>
                    <option value={3}>Moveis, Casa e Jardim</option>
                    <option value={3}>Imóveis</option>
                    <option value={3}>Equipamentos e Ferramentas</option>
                    <option value={3}>Celulares e Tablets</option>
                    <option value={3}>Esporte</option>
                    <option value={3}>Tecnologia</option>
                    <option value={3}>Emprego</option>
                    <option value={3}>Outros</option>
                </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    A primeira foto é a foto principal do anúncio.
                </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary">
                    Descrição
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    Escreva os detalhes do que está vendendo.
                </Typography>
                <TextField 
                    multiline
                    minRows={6}
                    variant="outlined"
                    fullWidth
                />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                    Dados de contato
                </Typography>
                <TextField 
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /><br />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /><br />
                <TextField 
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                </Box>

                <Container maxWidth="md" className={classes.box}>
                    <Box textAlign="right">
                        <Button variant="contained" color="primary">
                            Publicar Anúncio
                        </Button>
                    </Box>
                </Container>
            </Container>
        </TemplateDefault>
    )
} 

export default Publish