import { ButtonColorEnum } from 'common/enums';
import { Button } from 'components/primitives';
import React, { useState } from 'react'
import * as styles from './styles';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const CreateProject = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [repository, setRepository] = useState('');
    const [description, setDescription] = useState('');

    const allProjects = () => {
        navigate('/projects');
    }

    return (
        <div css={styles.wrapper}>
            <div css={styles.container}>
                <h2>Create my project</h2>
                <form css={styles.form}>
                    <div css={styles.currentProject}>Current Project</div>
                    <div css={styles.input}>
                        <h2>Project name</h2>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />    
                    </div>
                    <div css={styles.input}>
                        <h2>Repository</h2>
                        <textarea value={repository} onChange={(e) => setRepository(e.target.value)} rows="4" cols="50"  />     
                    </div>
                    <div css={styles.description}>
                        <h2>Description</h2>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50"  />  
                    </div>
                    <Button text='Create' color={ButtonColorEnum.LILAC} stretched={true} />
                </form>
            </div>
            <div css={styles.find} onClick={allProjects}>
                <h1>Find projects</h1>
                <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
        </div>
    )
}

export { CreateProject };