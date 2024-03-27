import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//     {
//         name: 'স্পেনের কান্না',
//         pages: 281
//     },
//     {
//         name: 'কান্দাহারের পথে',
//         pages: 387
//     },
//     {
//         name: 'অবাধ্যতার ইতিহাস',
//         pages: 273
//     },
//     {
//         name: 'ইতিহাসের জানালা',
//         pages: 125
//     }
// ];


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Chart({ customObject }) {
    console.log(customObject);
    const data = customObject;
    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <BarChart
                width={1240}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

Chart.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
