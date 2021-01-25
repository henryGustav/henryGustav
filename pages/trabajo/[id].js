import React from 'react';


const Trabajo = ({ idTrabajo }) => {
    console.log(idTrabajo);
    return (
        <div>

        </div>
    );
}


Trabajo.getInitialProps = async (ctx) => {
    const { id } = await ctx.query;

    return { idTrabajo: id };
};
export default Trabajo;