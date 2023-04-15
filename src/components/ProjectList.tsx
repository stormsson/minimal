import styles from '@/components/ProjectList.module.scss'



export default function ProjectList({projects}: any) {

    return (
        <table className={styles.ProjectList}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((item:any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.active ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    
  }
  