import useTrailer from '../hooks/useTrailer';

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, isLoading, error } = useTrailer(gameId);

    if (isLoading) return null;
    if (error) return null;

    const first = data?.results[0];

    return (
        <video src={first?.data[480]} poster={first?.preview} controls></video>
    )
}

export default GameTrailer
