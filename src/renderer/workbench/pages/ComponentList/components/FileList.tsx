import { Alert } from '@material-ui/lab';
import React from 'react';
import MatchCard from '../../../components/MatchCard/MatchCard';

const MAX_FILES = 500;

export interface FileListProps {
  component: any;
  scan: any;
  filter?: 'pending' | 'identified' | 'ignored';
  onSelectFile: (path: string) => void;
}

export const FileList = ({ component, scan, filter, onSelectFile }: FileListProps) => {
  const files = component.files
    .map((file) => ({
      path: file,
      status: scan[file][0]?.status ? scan[file][0].status : 'pending',
    }))
    .filter((file) => !filter || file.status === filter);

  return (
    <>
      <section className="file-list">
        {files.length > 0
          ? files.slice(0, MAX_FILES).map((file) => (
              <article className="item" key={file.path} onClick={() => onSelectFile(file.path)}>
                <MatchCard label={file.path} status={file.status} />
              </article>
            ))
          : null}
      </section>

      {files.length > MAX_FILES && (
        <Alert className="my-5" severity="info">
          <strong>{files.length - MAX_FILES}</strong> files more...
        </Alert>
      )}
    </>
  );
};

export default FileList;
