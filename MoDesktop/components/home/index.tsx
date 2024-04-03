/*
 * @Author: qiulin qiulin@smm.cn
 * @Date: 2024-04-03 15:13:42
 * @LastEditors: qiulin qiulin@smm.cn
 * @LastEditTime: 2024-04-03 18:29:08
 * @FilePath: /react-native-demo/MoDesktop/components/home/index.tsx
 * @Description:
 */
import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count:', count);
    }, [count])
    return (
        <View>
            <Text>数据终端</Text>
            <Text>{count}</Text>
            <Button
                onPress={e => {
                    console.log(e);
                    setCount(count + 1);
                }}
                title="+1"
            />
            <Button title="-1" />
        </View>
    );
};
export default Home;
