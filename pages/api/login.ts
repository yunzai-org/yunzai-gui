import { existsSync, readFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
//
const cwd = process.cwd()
//
const dir = join(cwd, 'yunzai-gui.json')

const UserName = 12345678
const PassWord = 12345678

/**
 * *******
 * 请求登录
 * *******
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        //
        return
    }

    const data = req.body;

    //
    if (!existsSync(dir)) {
        if (data?.username == UserName && data?.password == PassWord) {
            res.status(200).json({
                "msg": "校验成功",
                "data": {
                    name: '超级管理员',
                    username: data?.username,
                    password: data?.password
                }
            });
        } else {
            res.status(400).json({ msg: "账户或密码错误" });
        }
        //
        return
    } else {
        try {
            const JOSNData = JSON.parse(readFileSync(dir, 'utf-8'))
            const admins = JOSNData?.admins

            //
            if (!admins || !Array.isArray(admins)) {
                res.status(400).json({ msg: "配置为空" });
                return
            }

            //
            const find = admins.find(item => item.username == data?.username)
            if (!find) {
                res.status(400).json({ msg: "账户或密码错误" });
                return
            }


            if (data?.password != find.password) {
                res.status(400).json({ msg: "账户或密码错误" });
                return
            }

            //
            res.status(200).json({
                "msg": "校验成功",
                "data": {
                    name: '超级管理员',
                    username: data?.username,
                    password: data?.password
                }
            });

            //
        } catch {
            res.status(400).json({ msg: "格式错误" });
        }
        return
    }
}