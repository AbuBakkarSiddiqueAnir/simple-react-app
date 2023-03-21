import { FC } from 'react';
import { Options } from '../../../assets';

type TableProps = {
  data: Array<{
    id: number;
    email: string;
    user: string;
    options: string;
  }>;
};


const Table: FC<TableProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden  sm:rounded-lg">
            <table className="min-w-full ">
              <thead className="bg-gray-50 rounded-[12px]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#4E5D78] uppercase tracking-wider">
                   #ID
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#4E5D78] uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#4E5D78] uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-[#4E5D78] uppercase tracking-wider">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4E5D78]">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4E5D78]">{item.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4E5D78]">
                        <img className='ml-4 cursor-pointer' src={Options} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;